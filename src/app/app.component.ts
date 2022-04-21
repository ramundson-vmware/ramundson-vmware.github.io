import { Component, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import * as Converter from "./converter";
import '@cds/core/input/register.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  editorOptions = { theme: 'vs-dark', language: 'json' };
  code: string = 'function x() {\nconsole.log("Hello world!");\n}';

  @ViewChildren('todoInput')
  todoInputElement!: QueryList<any>;
  manualInfo: Map<string, string> = new Map();
  missingInfo: Map<string, string> = new Map();
  schemaList: any[] = [];
  updatedSchemaList: any[] = [];
  relationships: any;
  updatedRelationships: any;
  activeTab: any = "";

  invalidJsonInput: boolean = false;
  errorText: any;
  currentTodo = 0;


  jsonInput =
    JSON.stringify({
      "kernel": {
        "name": "Linux",
        "release": "4.14.203-156.332.amzn2.x86_64",
        "version": "#1 SMP Fri Oct 30 19:19:33 UTC 2020",
        "machine": "x86_64",
        "processor": "x86_64",
        "os": "GNU/Linux"
      },
      "memory": {
        "swap": {
          "cached": "0kB",
          "total": "0kB",
          "free": "0kB"
        },
        "hugepages": {
          "total": "0",
          "free": "0",
          "reserved": "0",
          "surplus": "0"
        },
        "directmap": {
          "4k": "55296kB",
          "2M": "993280kB"
        },
        "total": "1006944kB",
        "free": "202380kB",
        "available": "695912kB",
        "buffers": "2144kB",
        "cached": "586184kB",
        "active": "195172kB",
        "inactive": "475220kB",
        "dirty": "66676kB",
        "writeback": "0kB",
        "anon_pages": "82052kB",
        "mapped": "60296kB",
        "slab": "92376kB",
        "slab_reclaimable": "66180kB",
        "slab_unreclaim": "26196kB",
        "page_tables": "3892kB",
        "nfs_unstable": "0kB",
        "bounce": "0kB",
        "commit_limit": "503472kB",
        "committed_as": "476588kB",
        "vmalloc_total": "34359738367kB",
        "vmalloc_used": "0kB",
        "vmalloc_chunk": "0kB",
        "hugepage_size": "2048kB"
      },
      "network": {
        "interfaces": {
          "lo": {
            "mtu": "65536",
            "flags": [
              "LOOPBACK",
              "UP",
              "LOWER_UP"
            ],
            "encapsulation": "Loopback",
            "addresses": {
              "127.0.0.1": {
                "family": "inet",
                "prefixlen": "8",
                "netmask": "255.0.0.0",
                "scope": "Node"
              },
              "::1": {
                "family": "inet6",
                "prefixlen": "128",
                "scope": "Node",
                "tags": [

                ]
              }
            },
            "state": "unknown",
            "routes": [
              {
                "destination": "unreachable",
                "family": "inet6",
                "metric": "1024"
              },
              {
                "destination": "unreachable",
                "family": "inet6",
                "metric": "1024"
              },
              {
                "destination": "unreachable",
                "family": "inet6",
                "metric": "1024"
              },
              {
                "destination": "unreachable",
                "family": "inet6",
                "metric": "1024"
              },
              {
                "destination": "unreachable",
                "family": "inet6",
                "metric": "1024"
              },
              {
                "destination": "unreachable",
                "family": "inet6",
                "metric": "1024"
              },
              {
                "destination": "unreachable",
                "family": "inet6",
                "metric": "1024"
              },
              {
                "destination": "unreachable",
                "family": "inet6",
                "metric": "1024"
              },
              {
                "destination": "unreachable",
                "family": "inet6",
                "metric": "1024"
              }
            ]
          },
          "eth0": {
            "type": "eth",
            "number": "0",
            "mtu": "9001",
            "flags": [
              "BROADCAST",
              "MULTICAST",
              "UP",
              "LOWER_UP"
            ],
            "encapsulation": "Ethernet",
            "addresses": {
              "0E:D3:55:72:05:11": {
                "family": "lladdr"
              },
              "10.11.160.101": {
                "family": "inet",
                "prefixlen": "19",
                "netmask": "255.255.224.0",
                "broadcast": "10.11.191.255",
                "scope": "Global"
              },
              "fe80::cd3:55ff:fe72:511": {
                "family": "inet6",
                "prefixlen": "64",
                "scope": "Link",
                "tags": [

                ]
              }
            },
            "state": "up",
            "arp": {
              "169.254.169.254": "0e:70:51:08:a7:28",
              "10.11.160.1": "0e:70:51:08:a7:28"
            },
            "routes": [
              {
                "destination": "default",
                "family": "inet",
                "via": "10.11.160.1"
              },
              {
                "destination": "10.11.160.0/19",
                "family": "inet",
                "scope": "link",
                "proto": "kernel",
                "src": "10.11.160.101"
              },
              {
                "destination": "169.254.169.254",
                "family": "inet"
              },
              {
                "destination": "fe80::/64",
                "family": "inet6",
                "metric": "256",
                "proto": "kernel"
              }
            ]
          }
        },
        "default_interface": "eth0",
        "default_gateway": "10.11.160.1"
      },
      "IPAddress": "10.11.160.0/19",
      "ipaddress": "10.11.160.101",
      "macaddress": "0E:D3:55:72:05:11",
      "ip6address": "fe80::cd3:55ff:fe72:511",
      "os": "linux",
      "os_version": "4.14.203-156.332.amzn2.x86_64",
      "platform": "amazon",
      "platform_version": "2",
      "platform_family": "amazon",
      "uptime_seconds": 99,
      "uptime": "1 minutes 39 seconds",
      "idletime_seconds": 30,
      "idletime": "30 seconds",
      "dmi": {
        "dmidecode_version": "3.0",
        "smbios_version": "2.7",
        "bios": {
          "vendor": "Xen",
          "version": "4.11.amazon",
          "release_date": "08/24/2006",
          "address": "0xE8000",
          "runtime_size": "96 kB",
          "rom_size": "64 kB",
          "bios_revision": "4.11"
        },
        "system": {
          "manufacturer": "Xen",
          "product_name": "HVM domU",
          "version": "4.11.amazon",
          "serial_number": "ec2678df-0efe-5d76-2d98-3543ab3851cc",
          "uuid": "EC2678DF-0EFE-5D76-2D98-3543AB3851CC",
          "wake_up_type": "Power Switch",
          "sku_number": "Not Specified",
          "family": "Not Specified"
        },
        "chassis": {
          "manufacturer": "Xen",
          "type": "Other",
          "lock": "Not Present",
          "version": "Not Specified",
          "serial_number": "Not Specified",
          "asset_tag": "Not Specified",
          "boot_up_state": "Safe",
          "power_supply_state": "Safe",
          "thermal_state": "Safe",
          "security_status": "Unknown",
          "oem_information": "0x00000000",
          "height": "Unspecified",
          "number_of_power_cords": "Unspecified",
          "contained_elements": "0"
        },
        "processor": {
          "socket_designation": "CPU 1",
          "type": "Central Processor",
          "family": "Other",
          "manufacturer": "Intel",
          "id": "F2 06 03 00 FF FB 8B 17",
          "version": "Not Specified",
          "voltage": "Unknown",
          "external_clock": "Unknown",
          "max_speed": "2400 MHz",
          "current_speed": "2400 MHz",
          "status": "Populated, Enabled",
          "upgrade": "Other",
          "l1_cache_handle": "Not Provided",
          "l2_cache_handle": "Not Provided",
          "l3_cache_handle": "Not Provided",
          "serial_number": "Not Specified",
          "asset_tag": "Not Specified",
          "part_number": "Not Specified"
        }
      },
      "json?": "{\n  \"accountId\" : \"530342348278\",\n  \"architecture\" : \"x86_64\",\n  \"availabilityZone\" : \"us-east-1a\",\n  \"billingProducts\" : null,\n  \"devpayProductCodes\" : null,\n  \"marketplaceProductCodes\" : null,\n  \"imageId\" : \"ami-013435712e3cebc25\",\n  \"instanceId\" : \"i-0ea0b551c0aa043e1\",\n  \"instanceType\" : \"t2.micro\",\n  \"kernelId\" : null,\n  \"pendingTime\" : \"2022-01-20T20:33:06Z\",\n  \"privateIp\" : \"10.11.160.101\",\n  \"ramdiskId\" : null,\n  \"region\" : \"us-east-1\",\n  \"version\" : \"2017-09-30\"\n}",
      "hostname": "ip-10-11-160-101",
      "machinename": "ip-10-11-160-101.ec2.internal",
      "fqdn": "ip-10-11-160-101.ec2.internal",
      "domain": "ec2.internal",
      "init_package": "systemd",
      "block_device": {
        "xvda": {
          "size": "16777216",
          "removable": "0",
          "rotational": "0",
          "physical_block_size": "512",
          "logical_block_size": "512"
        },
        "xvdf": {
          "size": "20971520",
          "removable": "0",
          "rotational": "0",
          "physical_block_size": "512",
          "logical_block_size": "512"
        }
      },
      "hostnamectl": {
        "static_hostname": "ip-10-11-160-101.ec2.internal",
        "icon_name": "computer-vm",
        "chassis": "vm",
        "machine_id": "ec27041a88f931b46d484ac723cf13ee",
        "boot_id": "602c836ce028429fa9195067f6ba0ed5",
        "virtualization": "xen",
        "operating_system": "Amazon Linux 2",
        "cpe_os_name": "cpe:2.3:o:amazon:amazon_linux:2",
        "kernel": "Linux 4.14.203-156.332.amzn2.x86_64",
        "architecture": "x86-64"
      },
      "machine_id": "ec27041a88f931b46d484ac723cf13ee",
      "os_release": {
        "name": "Amazon Linux",
        "version": "2",
        "id": "amzn",
        "id_like": [
          "centos",
          "rhel",
          "fedora"
        ],
        "version_id": "2",
        "pretty_name": "Amazon Linux 2",
        "ansi_color": "0;33",
        "cpe_name": "cpe:2.3:o:amazon:amazon_linux:2",
        "home_url": "https://amazonlinux.com/"
      },
      "packages": {
        "libpath_utils": {
          "epoch": "0",
          "version": "0.2.1",
          "release": "29.amzn2",
          "installdate": "1605238431",
          "arch": "x86_64"
        },
        "kbd-misc": {
          "epoch": "0",
          "version": "1.15.5",
          "release": "15.amzn2",
          "installdate": "1605238418",
          "arch": "noarch"
        }
      },
      "time": {
        "timezone": "UTC"
      }
    });



  start() {
    this.startConversion(this.jsonInput);
  }

  startConversion(event: any) {
    this.invalidJsonInput = false;
    this.jsonInput = event;
    let result: any[];

    try {
      result = Converter.JsonToCollectorSchema(this.jsonInput, "OS", { name: "ComputeResourceId" }, this.manualInfo);
      this.schemaList = result[0];
      console.log(result[1])

      this.relationships = result[1];
      this.manualInfo = result[2];
    } catch (e) {
      if (e == "Failed to parse JSON") {
        this.invalidJsonInput = true;
        this.errorText = e;
        console.error(e);
      }
      else {
        throw e;
      }
    }

    Array.from(this.manualInfo.entries()).forEach((entry) => {
      if (entry[1] == Converter.MANUAL_REVIEW_NEEDED_PLACEHOLDER || entry[1] == "") {
        this.missingInfo.set(entry[0], entry[1]);
      }
    })

  }

  updateManualInfo(lookupKey: string, input: any) {

    this.missingInfo.delete(lookupKey);
    this.manualInfo.set(lookupKey, input);
    this.currentTodo++;
    setTimeout(() => {
      this.todoInputElement.get(0).nativeElement.focus();
    }, 10)

  }
  lastTodo() {
    if (this.currentTodo > 0) {
      this.currentTodo--;
    }
  }

  relationshipCodeChange(event: any) {

    this.updatedRelationships = event;
  }

  schemaCodeChange(event: any, index: any) {
    this.updatedSchemaList[index] = event;
  }

  saveChanges() {

  }
}
