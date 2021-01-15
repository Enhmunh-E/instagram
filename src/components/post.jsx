import React from 'react'
import '../styles/post.scss'
import { PostItem } from './postItem'
const Post = () => {
    const Time = "Wed Jan 13 2021 20:06:50 GMT+0800 (Ulaanbaatar Standard Time)"
    const imageUrls = ["https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2019/10/foreground_asteroid_passing_the_crab_nebula/20815003-1-eng-GB/Foreground_asteroid_passing_the_Crab_Nebula_card_full.jpg", "https://images.unsplash.com/photo-1473958828028-53df95f0b5ed?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ"]
    return (
        <div className="post-container container row">
            <PostItem  avatarUrl="https://www.pikpng.com/pngl/m/80-805068_my-profile-icon-blank-profile-picture-circle-clipart.png" postedUser="Someone" imgUrls={imageUrls} dateTime={Time}/>
        </div>
    );
}
export { Post }