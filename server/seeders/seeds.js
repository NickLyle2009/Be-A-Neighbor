const db = require ('../config/connection');
const { User, Post, UserStories} = ('../models');
const userseeds = require ('./userSeeds.json');
const postSeeds = require ('./postSeeds.json')
const storiesSeeds = require ('./storySeeds.json')
const commentSeeds = require ('./commentSeeds.json')

db.once('open', async () => {
    try {
          await Post.deleteMany({});
          await User.deleteMany({});
          await UserStories.deleteMany({});
          
          for (let i=0; i < postSeeds.lenth; i++) {
              const {_id, postAuthor } = await Post.create(postSeeds[i]); 
              const user = await User.findOneandUpdate(
                  {username: postAuthor }, 
                  {
                      $addtoset: {
                          post: _id, 
                      }, 
                  }
              );
          }
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
});