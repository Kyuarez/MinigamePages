//유니티 로딩(WebGL은 JS기반)

window.loadUnityGame = function (gamePath, canvasID) {
    //기존 유니티 인스턴스가 있다면 제거
    if (window.unityGameInstance) {
        window.unityGameInstance.Quit().then(() => {
            console.log("Previous Unity instance quit successfully.");
            window.unityGameInstance = null;
        }).catch((message) => {
            console.error("Error quitting previous Unity instance:", message);
        });
    }

    // Unity 로더 스크립트 동적으로 로드 (이미 로드된 경우 건너뛰기)
    
};