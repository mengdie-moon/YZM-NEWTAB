export function showMessage(message, type = 'info', duration = 3000) {
    if (msgRef.value) {
        msgRef.value.addMessage(message, type, duration)
    }
}

export function handleMsgClose(id) {
    return 'ok'
}