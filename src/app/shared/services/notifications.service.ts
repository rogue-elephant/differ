import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

/** Service for displaying notifications to the end user (toast pop-ups etc.)
 * @export
 * @class NotificationsService
 */
@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private snackbar: MatSnackBar) { }

  /** Displays a notification tot he user with the specified properties.
 * @param {string} title What the message is generally regarding (error, success etc.)
 * @param {string} message The contents of the message
 * @param {notificationClassName} [className='default'] The CSS class to apply to the notification (this will be .notification-{className})
 * @memberof NotificationsService
 */
showNotification(title: string, message: string, className: notificationClassName = 'default') {
    this.snackbar.open(message, title, {panelClass: `notification-${className}`});
  }
}

/** String enum type for determining what class names are available for the notifications*/
export type notificationClassName = 'success' | 'error' | 'default';
