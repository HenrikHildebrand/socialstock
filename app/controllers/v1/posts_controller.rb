class V1::PostsController < V1::BaseController
    
    # GET /v1/posts
    def index
        @posts = Post.all
        render json: @posts
    end

    # GET /v1/posts/new
    def new
        @post = Post.new
        render json: @post
    end

    # POST /v1/posts
    def create
        @post = Post.new(post_params)
        if @post.save
            render json: @post
        else
            render json: {error: "Unable to create new post.", status: 400}
        end
    end
    
    # GET /v1/posts/:id/edit
    def edit
        @post = Post.find(params[:id])
        render json: @post
    end

    # PUT /v1/posts/:id
    def update
        @post = Post.find(params[:id])
        if @post.update(post_params)
            render json: {message: "Post updated successfully", status: 200}
        else
            render json: {message: "Unable to update post", status: 400}
        end
    end
    
    # GET /v1/posts/:id/edit
    def show
        @post = Post.find(params[:id])
        render json: @post
    end
    
    # DELETE /v1/posts/:id
    def destroy
        @post = Post.find(params[:id])
        if @post
            @post.destroy
            render json: {message: "Post deleted successfully", status: 200}
        else
            render json: {message: "Unable to delete post", status: 400}
        end
    end

    private
    def post_params
        params.permit(:title, :body, :prognose, :user_id)
    end


end