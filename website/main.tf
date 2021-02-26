terraform {
  required_providers {
    cloudflare = {
      source = "cloudflare/cloudflare"
    }
  }
}

variable "cloudflare_api_token" { }

variable "cloudflare_account_id" { }

variable "cloudflare_zone_id" { }

variable "cloudflare_website" { }

provider "cloudflare" {
  api_token = var.cloudflare_api_token
  account_id = var.cloudflare_account_id
}

resource "cloudflare_worker_route" "base_domain_route" {
  zone_id = var.cloudflare_zone_id
  pattern = var.cloudflare_website
  script_name = cloudflare_worker_script.cli_agent.name
}

resource "cloudflare_worker_script" "cli_agent" {
  name = "cli_agent"
  content = file("src/serverless/cli_agent.js")
}
