#!/usr/bin/env bash

function self_sign {
  local GPG_USER="${1}"
  local INSTALL_SCRIPT="${0}"

  rm -f ${INSTALL_SCRIPT}.asc

  gpg --batch -sau ${GPG_USER} ${INSTALL_SCRIPT}
}

function install {
  echo "Installing SuicideOS..."
}

function main {
  local SUB_COMMAND="${1}"
  local ARGS="${@:2}"

  case ${SUB_COMMAND} in
    self_sign) self_sign ${ARGS} ;;
    *) install ;;
  esac
}

main ${@}
