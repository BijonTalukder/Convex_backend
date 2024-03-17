import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("tasks").collect();
  },
});
export const create= mutation({
    
    args:{
        text:v.string(),
        isCompleted:v.boolean()
    },
    handler:async(ctx,args)=>{
        console.log(args,'debug');
        return await ctx.db.insert("tasks",args)
    }
})