import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types, Document } from 'mongoose';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review, ReviewDocument } from './review.model';

@Injectable()
export class ReviewService {
    constructor(@InjectModel(Review.name) private readonly reviewModel: Model<ReviewDocument>) { }

    async create(dto: CreateReviewDto): Promise<Document<Review>> {
        return this.reviewModel.create(dto);
    }

    async delete(id: string): Promise<Document<Review> | null> {
        return this.reviewModel.findByIdAndDelete(id).exec();
    }

    async findByProductId(productId: string): Promise<Document<Review>[]> {
        return this.reviewModel.find({ productId: new Types.ObjectId(productId) }).exec();
    }
}
