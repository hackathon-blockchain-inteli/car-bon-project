target "dapp" {
}

variable "TAG" {
  default = "devel"
}

variable "DOCKER_ORGANIZATION" {
  default = "cartesi"
}

target "server" {
  tags = ["cartesi/dapp:carbon_ia-devel-server"]
}

target "console" {
  tags = ["cartesi/dapp:carbon_ia-devel-console"]
}

target "machine" {
  tags = ["cartesi/dapp:carbon_ia-devel-machine"]
}