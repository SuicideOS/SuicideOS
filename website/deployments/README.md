# Deployment: SuicideOS Website (suicide.sh) <!-- omit in toc -->

## Table of Contents <!-- omit in toc -->
- [Requirements](#requirements)
- [Providers](#providers)
- [Inputs](#inputs)
- [Outputs](#outputs)

<!--- BEGIN_TF_DOCS --->
## Requirements

No requirements.

## Providers

| Name | Version |
|------|---------|
| cloudflare | n/a |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| cloudflare\_account\_id | Cloudflare Account ID | `string` | n/a | yes |
| cloudflare\_api\_token | Cloudflare API Token | `string` | n/a | yes |
| cloudflare\_website | Cloudflare Website domain | `string` | n/a | yes |
| cloudflare\_zone\_id | Cloudflare Zone ID | `string` | n/a | yes |

## Outputs

No output.

<!--- END_TF_DOCS --->
