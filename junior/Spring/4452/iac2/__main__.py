import pulumi
import pulumi_aws as aws


bucket = aws.s3.Bucket("my-bucket")

filepath = "./hello.html"

object = aws.s3.BucketObject("hello.html",
    bucket=bucket.id,
    source=pulumi.FileAsset(filepath)
)

user = aws.iam.User("my-user")


policy = aws.iam.Policy("my-policy",
    policy={
        "Version": "2012-10-17",
        "Statement": [{
            "Effect": "Allow",
            "Action": "s3:*",
            "Resource": [
                f"arn:aws:s3:::{bucket.id}",
                f"arn:aws:s3:::{bucket.id}/*"
            ]
        }]
    })

attach = aws.iam.UserPolicyAttachment("user-policy-attachment",
    user=user.name,
    policy_arn=policy.arn)


pulumi.export("bucket_name", bucket.id)
pulumi.export("bucket_url", pulumi.Output.concat("http://", bucket.bucket_domain_name))
