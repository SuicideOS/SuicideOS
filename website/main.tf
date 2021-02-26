provider "cloudflare" {
  version = "~> 2.0"
  api_key = "${var.cloudflare_api_token}"
}

resource "cloudflare_worker_route" "base_domain_route" {
  zone_id = "${var.cloudflare_zone_id}"
  pattern = "${var.cloudflare_website}"
  script_name = cloudflare_worker_script.my_script.name
}

resource "cloudflare_worker_script" "cli_agent" {
  name = "cli_agent"
  content = file("src/serverless/cli_agent.js")
}
