provider "cloudflare" {
  version = "~> 2.0"
  api_key = "${var.cloudflare_api_token}"
}
