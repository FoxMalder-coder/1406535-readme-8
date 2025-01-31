import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AuthUser } from '@project/shared-types';

@Schema({
  collection: 'users',
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})
export class UserModel extends Document implements AuthUser {
  @Prop()
  public avatar: string;

  @Prop({ required: true, unique: true })
  public email: string;

  @Prop({ required: true })
  public fullName: string;

  @Prop({ required: true })
  public passwordHash: string;

  @Prop()
  public posts: string[];

  @Prop()
  public subscribers: string[];

  public id?: string;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);

UserSchema.virtual('id').get(function() {
  return this._id.toString();
});
