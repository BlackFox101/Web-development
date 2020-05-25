<?php

function getPostParameter($item)
{
  return $_POST[$item];
}

function getRequestMethod()
{
  return $_SERVER['REQUEST_METHOD'];
}
