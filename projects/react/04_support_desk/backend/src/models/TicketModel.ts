import mongoose, { Schema } from 'mongoose';

export interface Ticket {
  _id: string;
  user: Schema.Types.ObjectId;
  product: string;
  description: string;
  status: string;
}

const ticketSchema = new Schema<Ticket>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    product: {
      type: String,
      required: [true, 'Please select a product'],
      enum: [
        'AMD Ryzen 9 5950X',
        'Gigabyte B550 AORUS ELITE AX V2',
        'Samsung 1TB M.2 PCIe NVMe 980',
        'Gigabyte GeForce RTX 3070 Ti AORUS MASTER LHR 8GB GDDRX6',
      ],
    },
    description: {
      type: String,
      required: [true, 'Please provide a description of the issue'],
      maxlength: [1000, 'Description cannot be more than 1000 characters'],
    },
    status: {
      type: String,
      required: [true, 'Please select a status'],
      enum: ['new', 'open', 'closed'],
      default: 'new',
    },
  },
  { timestamps: true }
);

const TicketModel = mongoose.model<Ticket>('Ticket', ticketSchema);

export default TicketModel;
