async function seed() {
    const createTable = await sql`
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        image VARCHAR(255),
        "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );`;

    console.log(`Created "users" table`);

    const users = await Promise.all([
        sql`INSERT INTO users (name, email, image)
        VALUES ('Guillermo Rauch', 'rauchg@vercel.com', 'https://avatars.githubusercontent.com/u/81169'),
        ON CONFLICT (email) DO NOTHING;`,
        sql`INSERT INTO users (name, email, image)
        VALUES ('Lee Robinson', 'lee@vercel.com', 'https://avatars.githubusercontent.com/u/499239'),
        ON CONFLICT (email) DO NOTHING;`,
        sql`INSERT INTO users (name, email, image)
        VALUES ('Steven Tey', 'stey@vercel.com', 'https://avatars.githubusercontent.com/u/625075'),
        ON CONFLICT (email) DO NOTHING;`,
    ]);

    console.log(`Seeded ${users.length} users`);

    return {
        createTable,
        users
    };
}

export async function load() {
    const startTime = Date.now();

    try {
        const { rows: users } = await sql`SELECT * FROM users`;
        const duration = Date.now() - startTime;
        return { users: users, duration: duration };
    } catch (error) {
        if (error?.message === 'relation "users" does not exist') {
            console.log('Table does not exist, creating and seeding it with dummy data');
            await seed();
            const { rows: users } = await sql`SELECT * FROM users`;
            const duration = Date.now() - startTime;
            return { users: users, duration: duration };
        } else {
            throw error;
        }
    }
}