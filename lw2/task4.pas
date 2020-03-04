PROGRAM WorkWithQueryString(INPUT, OUTPUT);
USES
  GPC;
FUNCTION GetQueryStringParameter(Key: STRING): STRING;
VAR
  Str, Check: STRING;
BEGIN {GetQueryStringParameter}
  Str := GetEnv('QUERY_STRING');
  Str := Str + '&';
  WHILE Length(Str) > 0
  DO
    BEGIN
      Check := Copy(Str, 1, Pos('=', Str)-1);
      IF Check = Key
      THEN
        BEGIN
          Delete(Str, 1, Pos('=', Str));
          Check := Copy(Str, 1, Pos('&', Str)-1); //&
          IF Check <> '&'
          THEN
            GetQueryStringParameter := Copy(Str, 1, Pos('&', Str)-1)
          ELSE
            GetQueryStringParameter := 'Пусто';
          Delete(Str, 1, Length(Str))
        END
      ELSE
        BEGIN
          Delete(Str, 1, Pos('&', Str));
          GetQueryStringParameter := 'Нет такого идентификатора'
        END
    END
END; {GetQueryStringParameter}

BEGIN {WorkWithQueryString}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  WRITELN('First Name: ', GetQueryStringParameter('first_name'));
  WRITELN('Last Name: ', GetQueryStringParameter('last_name'));
  WRITELN('Age: ', GetQueryStringParameter('age'))
END. {WorkWithQueryString}
