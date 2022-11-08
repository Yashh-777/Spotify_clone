export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,

    // Remove after finished developing
    // token: "BQDHKkHE6f4Q0QgseHzNkpYMvqdtRfVQTV6X-FPyhgjtQT5rjzr9Q2olJ9wMhNoe_Tj3O3URM6pm1tb-U1-T_OVJGgE-52T2a86dKMRQ9z0JfA6Kq8HkIea21JiM_yn4xdBqooIEyH6cvv4g8P8_oLibjUgzuviO62uedDyuE9iReiutr4BwqE2X_Qwk9-06Bp2NToovzhVSazMg",
}

export const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }

        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }
        
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
    
            default:
                return state;
    }
}