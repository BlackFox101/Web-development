PROGRAM PrintHello(INPUT, OUTPUT);
USES
  GPC;
VAR
  Str, Check, OutString: STRING;
BEGIN
  WRITELN('Content-Type: text/plain');
  WRITELN;
  WRITE('Hello ');
  Str := GetEnv('QUERY_STRING');
  Check := Copy(Str, 1, 5);
  IF Check = 'name='
  THEN
    BEGIN
	  DELETE(Str, 1, 5);
	  OutString := (Check + Str);
	  IF OutString <> 'name='
	  THEN
	    WRITELN('dear, ', Str)
	  ELSE
        WRITELN('Anonymous!');  
   	END
  ELSE
    WRITELN('Anonymous!');  
END.
