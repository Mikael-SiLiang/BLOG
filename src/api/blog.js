import request from "./request.js";

export async function getBlogs(page = 1, limit = 20, categoryid = -1) {
    return await request.get("/api/blog", {
        params: {
            page,
            limit,
            categoryid,
        }
    })
}

export async function getBlogCategories() {
    return await request.get("/api/blogtype")
}

export async function getBlog(id) {
    return await request.get(`/api/blog/${id}`)
}

export async function postComment(commentInfo) {
    return await request.post("/api/comment", commentInfo)
}

export async function getComments(page = 1, limit = 10, blogid) {
    return await request.get("/api/comment", {
        params: {
            blogid,
            page,
            limit,
        }
    })
}