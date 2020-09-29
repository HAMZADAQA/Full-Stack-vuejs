import axios from 'axios';
// const url = 'http://localhost:5000/api/posts/';
const url = 'api/posts/';

// static async getPosts() {
//     const res = await axios.get(url)
//     try {
//       const data = res.data
//       return data.map(post => ({
//         ...post,
//         createdAt: new Date(post.createdAt)
//       }))
//     } catch (err) {
//       return err
//     }
// }
class PostService {
    
    static getPosts() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                // console.log(data)
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
            
        });
    }
    
        static inserPost(text){
            return axios.post(url, {
                text
            })
        }
        static deletePost(id){
            return axios.delete(`${url}${id}`)
        }

}

export default PostService;




