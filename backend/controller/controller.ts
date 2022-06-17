import http, { IncomingMessage, ServerResponse } from 'http'
import { findAll} from '../model/model'


export const getAllData = async (request:IncomingMessage, response:ServerResponse) => {
    try {
        let allData = await findAll()
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.end(JSON.stringify(allData))
    } catch (error) {
        response.writeHead(400, { 'Content-Type': 'application/json' })
        response.end(JSON.stringify(error))
    }
}