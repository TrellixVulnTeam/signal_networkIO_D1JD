import { Injectable } from '@angular/core'
import { Socket } from 'ng-socket-io'
import { of } from 'rxjs/observable/of'
import { catchError, map } from 'rxjs/operators'

@Injectable()
export class SignalService {
	constructor(private socket: Socket) {}

	sendMessage(msg: string) {
		this.socket.emit('send', msg)
	}

	getMessage() {
		// console.log('service getMsg')
		return this.socket.fromEvent('send')
		// .pipe(
		//   map(data => data.msg),
		//   catchError(error => of(null))
		// );
	}
	getStatus() {
		// console.log('getting Status')
		return this.socket.fromEvent('signal')
	}
	sendStatus(status) {
		this.socket.emit('signal', status)
	}
}
