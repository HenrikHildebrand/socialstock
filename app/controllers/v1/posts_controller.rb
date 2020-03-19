class V1::PostsController < V1::BaseController
    
    # GET /v1/posts
    def index
    end

    # GET /v1/posts/new
    def new
    end

    # POST /v1/posts
    def create
    end
    
    # GET /v1/posts/:id/edit
    def edit
    end

    # PUT /v1/posts/:id
    def update
    end
    
    # GET /v1/posts/:id/edit
    def show
    end
    
    # DELETE /v1/posts/:id
    def destroy
    end

    def post_params
        params.permit(:title, :body, :prognose, :user)
    end


end