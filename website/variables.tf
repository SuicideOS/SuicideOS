variable "cloudflare_account_id" {
  type        = string
  sensetive   = true
  description = "Cloudflare Account ID"
  validation {
    condition     = length(var.cloudflare_account_id) == 40 && can(regex("[0-9A-Za-z]", var.cloudflare_account_id))
    error_message = "Variable must be of length 32 and only include alphanumeric characters."
  }
}

variable "cloudflare_api_token" {
  type        = string
  sensetive   = true
  description = "Cloudflare API Token"
  validation {
    condition     = length(var.cloudflare_api_token) == 40 && can(regex("[0-9A-Za-z-_]", var.cloudflare_api_token))
    error_message = "Variable must be of length 40 and only include alphanumeric characters or the symbols '-' and '_'."
  }
}

variable "cloudflare_website" {
  type        = string
  sensetive   = false
  description = "Cloudflare Website domain"
  validation {
    condition     = length(var.cloudflare_website) > 4
    error_message = "Variable must be greater than length 4."
  }
}

variable "cloudflare_zone_id" {
  type        = string
  sensetive   = true
  description = "Cloudflare Zone ID"
  validation {
    condition     = length(var.cloudflare_zone_id) == 40 && can(regex("[0-9A-Za-z]", var.cloudflare_zone_id))
    error_message = "Variable must be of length 32 and only include alphanumeric characters."
  }
}
