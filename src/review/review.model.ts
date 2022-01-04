import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

export type ReviewDocument = Review & Document;

@Schema()
export class Review {
    @Prop()
    name: string;

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    rating: number;

    @Prop()
    productId: Types.ObjectId;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);