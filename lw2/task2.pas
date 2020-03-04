PROGRAM PrintHello(INPUT, OUTPUT);
USES GPC;
VAR
  Lanterns: CHAR;
  Str: STRING;
  I: INTEGER;
BEGIN {PrintHello}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  
  Str := GetEnv('QUERY_STRING');
  FOR i := 1 TO LENGTH(Str)
  DO
    IF Str[I] = '='
    THEN
      Lanterns := Str[I+1];
  
  {Issue Paul Revere's message}
  BEGIN
    IF Lanterns >= '1'
    THEN
      IF Lanterns <= '2'
      THEN
        WRITE('The British are coming by ')
  END;
  IF Lanterns = '1'
  THEN
    WRITELN('land')
  ELSE
    IF Lanterns = '2'
    THEN
      WRITELN('sea')
    ELSE
      WRITELN('The North Church shows only ''', Lanterns, '''.')
END. {PrintHello}
