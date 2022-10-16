import { OkPacket } from 'mysql'; 
import { execute } from '../services/mysql.connector'; 
import { Entry } from './entries.model'; 
import { entryQueries } from './entries.queries';

export const readEntries = async() => {
    return execute<Entry[]>(entryQueries.readEntries, []);
}

export const readEntriesByEntryId = async (entryId: number) => {
    return execute<Entry[]>(entryQueries.readEntriesByEntryId, [entryId]);
};

export const createEntry = async (entry: Entry) => {
    return execute<OkPacket>(entryQueries.createEntry,
    [entry.title, entry.description, entry.project, entry.date, entry.start, entry.end, entry.image, entry.secondImage]);
};

export const updateEntry = async (entry: Entry) => { 
    return execute <OkPacket>(entryQueries.updateEntry,
    [entry.title, entry.description, entry.project, entry.date, entry.start, entry.end, entry.image, entry.secondImage, entry.id]); 
};

export const deleteEntry = async (entryId: number) => {
    return execute<OkPacket>(entryQueries.deleteEntry, [entryId]); 
};

