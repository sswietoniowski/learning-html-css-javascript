import { connect } from 'mongoose';
import 'colors';

const connectDb = async (): Promise<typeof import('mongoose')> => {
  try {
    // @ts-ignore
    const mongoUri = import.meta.env.VITE_MONGODB_URI;

    const conn = await connect(mongoUri);

    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);

    return conn;
  } catch (err: any) {
    console.error(
      `Error while connecting to MongoDB: ${err.message}`.red.underline.bold
    );

    process.exit(1); // Exit with failure
  }
};

export default connectDb;
