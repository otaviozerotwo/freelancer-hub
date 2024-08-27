;
; BIND data file for local loopback interface
;
$TTL    604800
@       IN      SOA     dns.freelancer-hub.com. root.freelancer-hub.com. (
                            100         ; Serial
                         604800         ; Refresh
                          86400         ; Retry
                        2419200         ; Expire
                         604800 )       ; Negative Cache TTL
;
freelancer-hub.com.       IN      NS      dns.freelancer-hub.com.
freelancer-hub.com.       IN      A       192.168.56.204
dns                       IN      A       192.168.56.204
www                       IN      CNAME   freelancer-hub.com.