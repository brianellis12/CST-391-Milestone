import { Request, RequestHandler, response, Response } from 'express'; 
import { Entry } from './entries.model'; ;
import * as EntryDao from './entries.dao'; 
import { OkPacket } from 'mysql';

export const readEntries : RequestHandler = async (req: Request, res: Response) => { 
    try {
        let entries; 
        let entryId = parseInt(req.query.entryId as string);

        console.log('entryId', entryId); 
        if (Number.isNaN(entryId)) {
            entries = await EntryDao.readEntries(); 
        } 
        else {
            entries = await EntryDao.readEntriesByEntryId(entryId);
        }

        res.status (200).json(entries);
    } catch (error) {
        console.error('[entries.controller][readEntries] [Error] ', error); 
        res.status (500).json({
            message: 'There was an error when fetching entries' 
        }); 
    } 
};

export const createEntry: RequestHandler = async (req: Request, res: Response) => { 
    try {
        console.log('req.body', req.body);
        const okPacket: OkPacket = await EntryDao.createEntry (req.body);

        console.log('entry', okPacket);
    res.status(200).json(okPacket);
    } catch (error) {
        console.error('[entries.controller][createEntry] [Error]', error); 
        res.status (500).json({
            message: 'There was an error when writing entries' 
        }); 
    } 
};

export const updateEntry: RequestHandler = async (req: Request, res: Response) => { 
    try {
        const okPacket: OkPacket = await EntryDao.updateEntry(req.body);

        console.log('req.body', req.body);
        console.log('entry', okPacket);
    res.status(200).json(okPacket);
    } catch (error) {
        console.error('[entries.controller][updateEntry] [Error]', error); 
        res.status (500).json({
            message: 'There was an error when writing entries' 
        }); 
    } 
};

export const deleteEntry: RequestHandler = async (req: Request, res: Response) => { 
    try {
        let entryId = parseInt(req.params.entryId as string);

        console.log('entryId', entryId);

        if(!Number.isNaN(entryId)) {
            const response = await EntryDao.deleteEntry(entryId);
            res.status(200).json(response);
        } else {
            throw new Error("Integer expected for entryId");
        }
          
    } catch (error) {
        console.error('[entries.controller][deleteEntry] [Error]', error); 
        res.status (500).json({
            message: 'There was an error when deleting entries' 
        }); 
    } 
};