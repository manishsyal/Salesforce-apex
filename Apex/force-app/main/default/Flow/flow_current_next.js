Get First 
TRIM(LEFT( {!SerialNumberFromNote}, FIND(",",{!SerialNumberFromNote})-1))

Get Next
TRIM(RIGHT({!SerialNumberFromNote}, LEN({!SerialNumberFromNote}) - FIND(",", {!SerialNumberFromNote})))