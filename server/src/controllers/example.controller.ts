import ResponseError from '@src/ts/classes/response-error';
import { Request, Response } from 'express';

const successExample = async (req: Request, res: Response) => {
  return res.json({
    success: {
      status: 200,
      message: 'Server is running!',
    },
  });
};

const errorExample = async () => {
  throw new ResponseError('Not found!', 404);
};

export default {
  successExample,
  errorExample,
};
