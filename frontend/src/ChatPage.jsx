import { PrettyChatWindow } from 'react-chat-engine-pretty'
const ChatPage = (props) => {

    return (
        <div className="background">
            <PrettyChatWindow
                projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
                username={props.user.username}
                secret={props.user.username}
                style={{ height: '100vh' }}
            />
        </div>
    )
}

export default ChatPage