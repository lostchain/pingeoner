import React from 'react'
import './SinglePost.css'

const SinglePost = () => {
    return (
        <div className="box">
            <div className="info">
                <img
                    className="userProfilePic"
                    src="https://res.cloudinary.com/dripcloud/image/upload/v1637425378/test_upload_react/mwbbudc4jkrgzdtzdtlx.png"
                    alt="profilePic"
                />
                <div className="nameAndDate">
                    <span className="username">drip016x</span>
                    <span className="date">2m ago</span>
                </div>
            </div>
            <img
                src="https://s3-alpha-sig.figma.com/img/3d4a/34ad/b6625cd4842483ac433dbf8ee33f6924?Expires=1639353600&Signature=BEF7xA-UFI-MhWGVjhHozfBsWkChEBjIUrgazKmTYcYp7~yfcGxjENPltQSk-P--XhgqIAIjbBaqBxvkHUDYNRQ2FJOD9XHwqc5hCPMHZIFRRdDCOLTiYxRvz2on8-iCjSJe~tWLHIWT8brT6xod89aFGSfSXVCEkXy~VCbmEM4x7hPGlcPpyn1H2WbJxE4kFyLFt6JF0vXNG1NdUJbQmS5T3qiCaH83g3uuwuY~dkYq4mqW7UwJhHnkRhmJ3C7vkIQPxnAbfAUi-GZI27a4CvZeQTzWAN3aQe9cqnFupocfFYG22cZwOgqQ87Q3id1tv9tfBDjh3BLb3Z5DzyI86A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="websiteLogo"
                className="websiteLogo"
            />
            <hr className="line" />
            <p className="status">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                corporis doloremque velit qui eius quas, asperiores vel
                aspernatur aliquid nobis praesentium, excepturi quae nulla autem
                quidem perspiciatis natus expedita unde
                adfasdfasdfasdfffffffffffffffffffffffffffffffffffffffffffff
            </p>
            {/* <p className="status">Lit quem persasdfffffffffffffffffffffffffffffffffffffffffffff</p> */}
            <div className="actions">
                <i className="actionIcon fas fa-retweet">
                    <span className="retweets">2</span>
                </i>
                <i className="actionIcon far fa-comment">
                    <span className="comments">4</span>
                </i>
                <i className="actionIcon far fa-heart">
                    <span className="likes">7</span>
                </i>
            </div>
        </div>
    )
}

export default SinglePost
