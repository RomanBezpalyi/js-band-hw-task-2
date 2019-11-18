# js-band-hw-task-2

Ciklum University: JS Band Internship. Homework task 2

The App implements three variants of method which returns a list of trucks by ids from the server. The variants of method are based on callback, or promises, or async/await.

There is a possibility of error returning from the server. If error occurs, method implemented tries to call for a truck object until error is received more than 2 times.

If there is an error while calling for a truck object three times, the truck is skipped. If there is no succecful response for all trucks, the method returns an error.

To see the result of each variant of method's call, check a console via link:
https://romanbezpalyi.github.io/js-band-hw-task-2/dist/
