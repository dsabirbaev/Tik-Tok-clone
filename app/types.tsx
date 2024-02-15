


export interface RandomUsers {
    id: string;
    name: string;
    image: string;
}


export interface Like {
    id: string;
    user_id: string;
    post_id: string;
}

export interface PostWithProfile {
    id: string;
    user_id: string;
    video_url: string;
    text: string;
    created_at: string;
    profile: {
        user_id: string;
        name: string;
        image: string;
    }
}



export interface Comment {
    id: string;
    user_id: string;
    post_id: string;
    text: string;
    created_at: string;
}


export interface UploadError {
    type: string;
    message: string;
}

///////////////

// COMPONENT TYPES

export interface PostMainCompTypes {
    post: PostWithProfile
}

export interface PostMainLikesCompTypes {
    post: PostWithProfile
}

//////////////////////

// LAYOUT INCLUDE TYPES


export interface MenuItemTypes {
    iconString: string,
    colorString: string,
    sizeString: string
}

export interface MenuItemFollowCompTypes {
    user: RandomUsers
}