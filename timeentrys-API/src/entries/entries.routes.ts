import { Router } from 'express'; 
import * as EntriesController from './entries.controller';

const router = Router(); router.
    route('/entries'). 
    get(EntriesController.readEntries);

    router.
        route('/entries'). 
        post(EntriesController.createEntry);
    
    router.
        route('/entries'). 
        put(EntriesController.updateEntry);

    router.
        route('/entries/:entryId'). 
        delete(EntriesController.deleteEntry);

export default router;




