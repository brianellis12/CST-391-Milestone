export const entryQueries = { 
 readEntries: `
    SELECT
        id AS id, title AS title, description AS description, 
        project AS project, date AS date, timeframe_start, 
        timeframe_end, image AS image, second_image
    FROM time_entries.entries 
    `,
readEntriesByEntryId: `
    SELECT
        id AS id, title AS title, description AS description, 
        project AS project, date AS date, timeframe_start, 
        timeframe_end, image AS image, second_image
    FROM time_entries.entries 
    WHERE time_entries.entries.id = ?
         `,
    createEntry: `
        INSERT INTO entries(title, description, project, date, timeframe_start, timeframe_end, image, second_image) VALUES (?,?,?,?,?,?,?,?)
        `,
    updateEntry: `
        UPDATE time_entries.entries 
        SET title = ?, description = ? , project = ?, date = ?, timeframe_start = ?, timeframe_end = ?, image = ?, second_image = ?
        WHERE id = ?
        `,
    deleteEntry: `
        DELETE FROM time_entries.entries 
        WHERE id = ?
    `,
    }
    
    