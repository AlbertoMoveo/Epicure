import { Request, Response } from 'express';
import SearchHandler from '../handlers/search.handler';

const SearchController = {
    search: async (req: Request, res: Response) => {
        try {
            const query = req.query.q as string;
            if (!query) {
                return res.status(400).json({ error: 'Bad Request - Missing query parameter' });
            }

            const searchResults = await SearchHandler.search(query);
            return res.status(200).json(searchResults);
        } catch (error) {
            console.error('Error in search:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};

export default SearchController;