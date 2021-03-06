PROGRAM WorkWithQueryString(INPUT, OUTPUT);
USES
  GPC;
VAR
   Str: STRING;
FUNCTION GetQueryStringParameter(Key: STRING): STRING;
VAR
  CheckKey, QueryString: STRING;
BEGIN {GetQueryStringParameter}
  Str := GetEnv('QUERY_STRING');
  Str := Str + '&';
  GetQueryStringParameter := '';
  WHILE Length(QueryString) > 0
  DO
    BEGIN
      CheckKey := Copy(QueryString, 1, Pos('=', QueryString) - 1);
      IF Key = CheckKey
      THEN
        BEGIN
          DELETE(QueryString, 1, Pos('=', QueryString));
          GetQueryStringParameter := Copy(QueryString, 1, Pos('&', QueryString) - 1);
        END
      ELSE
        BEGIN
          Delete(Str, 1, Pos('&', Str));
          GetQueryStringParameter := '��� ������ ��������������'
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
