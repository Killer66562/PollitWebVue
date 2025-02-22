export interface CustomResponse<T> {
    success: boolean
    data: T
}

export interface TestMessage {
    message: string
}

export interface BaseSchema {
    id_: number, 
    created_at: Date, 
    updated_at: Date
}

export interface Page<T> {
    items: T[], 
    total: number, 
    page: number, 
    size: number, 
    pages: number
}

export interface RegisterSchema {
    username: string, 
    password: string
}

export interface LoginSchema {
    username: string, 
    password: string
}

export interface CreatePollOptionSchema {
    name: string, 
    weight: number
}

export interface PollOptionSchema extends BaseSchema, CreatePollOptionSchema {}

export interface CreatePollSchema {
    name: string, 
    description: string, 

    anonymous: boolean, 
    multiple_choice: boolean, 
    can_change_choices: boolean, 
    weighted: boolean, 
    show_result: boolean

    starts_at: Date, 
    ends_at: Date, 

    options: CreatePollOptionSchema[]
}

export interface PollSchema extends BaseSchema, CreatePollSchema {
    creator_id: number
}

export enum Period {
    NOT_STARTED = 1, 
    STARTED = 2, 
    ENDED = 3
}

export enum OrderBy {
    END_TIME = 1, 
    NAME = 2, 
    CREATOR = 3, 
    POPULARITY = 4
}

export interface PollSearchSchema {
    period: Period, 
    order_by: OrderBy, 
    desc: boolean
}

export interface UserSchema extends BaseSchema {
    username: string
}

export interface TokenSchema {
    access_token: string, 
    refresh_token: string
}