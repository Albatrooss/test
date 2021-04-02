export default {
    insert: {
        query: `
            INSERT INTO todo(text)
            VALUES($1);
        `,
    },
    all: {
        query: `
            SELECT
                todo_id,
                text, 
                created_at,
                updated_at
            FROM todo;
        `,
    }
}