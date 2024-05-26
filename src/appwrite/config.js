import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client=new Client();
    databases;
    bucket;
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
                   .setProject(conf.appwriteProjectId) 

        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        console.log(userId)
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, //Document id
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        }
        catch(err){
            console.log("Appwrite :: createPost :: error", err)
        }
    }

    async updatePost(slug, {title, content, featuredImage,status}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        }catch(err){
            console.log("Appwrite :: updatePost :: error", err);
        }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        }
        catch(err){
            console.log("Appwrite :: deletePost :: error", err);
            return false;
        }
    }
    //to get only last deleted one
    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        }
        catch(err){
            console.log("Appwrite :: getPost :: error", err)
            return false
        }
    }
    //to get all deleted one. active one
    async getPosts(queries=[Query.equal("status", "active")	]){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        }
        catch{
            console.log("Appwrite :: getPosts :: error", err)
            return false;
        }

    }

    //file upload service
    async uploadFile(file){
        //this will return file id only
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        }
        catch(err){
            console.log("Appwrite :: uploadFiles :: error", err)
            return false;
        }
    }

    async deleteFile(fileId){
        try{
            this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        }
        catch(err){
            console.log("Appwrite :: deleteFile :: error", err)
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
    }
}

const service=new Service();
export default service;