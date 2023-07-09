import WebSocket from "ws";

export enum Commands {
    Registration = "reg",
    CreateRoom = "create_room",
    CreateGame = "create_game",
    AddShip = "add_ships",
    UpdateRoom = "update_room",
    AddPlayer = "add_user_to_room",
    StartGame = "start_game",
    Attack = "attack",
    Turn = "turn",
    RandomAttack = "randomAttack",
    Finish = "finish",
    UpdateWinners = "update_winners",
}

export enum Status {
    Miss = "miss",
    Shot = "shot",
    Killed = "killed",
}

export type Response = {
    id: number,
    type: Commands,
    data: string,
}

export interface ExtendedWebSocket extends WebSocket {
    id: number,
    name: string,
    password: string,
}

export type User = {
    name: string,
    password: string,
    socket: ExtendedWebSocket,
    inGame: boolean,
}

export type Rooms = Map<number, Room>

export type Room = {
    id: number,
    firstPlayer: ExtendedWebSocket,
    secondPlayer: ExtendedWebSocket,
    game: Game,
}

export type RoomModified = {
    roomId: number,
    roomUsers: {
        name: string,
        index: number,
    }[],
}

export type Game = {
    id: number,
    firstUser: ExtendedWebSocket,
    secondUser: ExtendedWebSocket,
    firstShips: Ship[],
    secondShips: Ship[],
    firstShots: Position[],
    secondShots: Position[],
    currentPlayer: number,
    isFinished: boolean,
}

export type Ship = {
    isKilled: boolean,
    points: PositionStatus[],
}


export type Position = {
    x: number,
    y: number,
}

export interface PositionStatus extends Position {
    status: boolean,
}
export type ShipOption = {
    position: Position,
    direction: boolean,
    length: number,
    type: "small" | "medium" | "large" | "huge",
}

export type AttackedShip = {
    status: Status,
    killedShip: Ship,
}

export type Winners = Map<string, number>

export type WinnersArr = {
    name: string,
    wins: number,
}
