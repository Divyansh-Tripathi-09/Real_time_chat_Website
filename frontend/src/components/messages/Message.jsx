
const Message = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt=""  />

            </div>
        </div>
    <div className={`chat-bubble text-white bg-blue-500`}>Hi! What is upp??</div>
    <div className={`chat-footer text-xs opacity-50 flex gap-1 items-center`}>12:42</div>
    </div>
  )
}

export default Message;