// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* Amazon Certificate Manager
*/
export interface AcmCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_authority_arn AcmCertificate#certificate_authority_arn}
  */
  readonly certificateAuthorityArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_body AcmCertificate#certificate_body}
  */
  readonly certificateBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_chain AcmCertificate#certificate_chain}
  */
  readonly certificateChain?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#domain_name AcmCertificate#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#private_key AcmCertificate#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#subject_alternative_names AcmCertificate#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#tags AcmCertificate#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#tags_all AcmCertificate#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#validation_method AcmCertificate#validation_method}
  */
  readonly validationMethod?: string;
  /**
  * options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#options AcmCertificate#options}
  */
  readonly options?: AcmCertificateOptions;
}
export class AcmCertificateDomainValidationOptions extends cdktf.ComplexComputedList {

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // resource_record_name - computed: true, optional: false, required: false
  public get resourceRecordName() {
    return this.getStringAttribute('resource_record_name');
  }

  // resource_record_type - computed: true, optional: false, required: false
  public get resourceRecordType() {
    return this.getStringAttribute('resource_record_type');
  }

  // resource_record_value - computed: true, optional: false, required: false
  public get resourceRecordValue() {
    return this.getStringAttribute('resource_record_value');
  }
}
export interface AcmCertificateOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_transparency_logging_preference AcmCertificate#certificate_transparency_logging_preference}
  */
  readonly certificateTransparencyLoggingPreference?: string;
}

export function acmCertificateOptionsToTerraform(struct?: AcmCertificateOptionsOutputReference | AcmCertificateOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_transparency_logging_preference: cdktf.stringToTerraform(struct!.certificateTransparencyLoggingPreference),
  }
}

export class AcmCertificateOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AcmCertificateOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateTransparencyLoggingPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateTransparencyLoggingPreference = this._certificateTransparencyLoggingPreference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcmCertificateOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateTransparencyLoggingPreference = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateTransparencyLoggingPreference = value.certificateTransparencyLoggingPreference;
    }
  }

  // certificate_transparency_logging_preference - computed: false, optional: true, required: false
  private _certificateTransparencyLoggingPreference?: string; 
  public get certificateTransparencyLoggingPreference() {
    return this.getStringAttribute('certificate_transparency_logging_preference');
  }
  public set certificateTransparencyLoggingPreference(value: string) {
    this._certificateTransparencyLoggingPreference = value;
  }
  public resetCertificateTransparencyLoggingPreference() {
    this._certificateTransparencyLoggingPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateTransparencyLoggingPreferenceInput() {
    return this._certificateTransparencyLoggingPreference;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate aws_acm_certificate}
*/
export class AcmCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_acm_certificate";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate aws_acm_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AcmCertificateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AcmCertificateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_acm_certificate',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateAuthorityArn = config.certificateAuthorityArn;
    this._certificateBody = config.certificateBody;
    this._certificateChain = config.certificateChain;
    this._domainName = config.domainName;
    this._privateKey = config.privateKey;
    this._subjectAlternativeNames = config.subjectAlternativeNames;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._validationMethod = config.validationMethod;
    this._options.internalValue = config.options;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_authority_arn - computed: false, optional: true, required: false
  private _certificateAuthorityArn?: string; 
  public get certificateAuthorityArn() {
    return this.getStringAttribute('certificate_authority_arn');
  }
  public set certificateAuthorityArn(value: string) {
    this._certificateAuthorityArn = value;
  }
  public resetCertificateAuthorityArn() {
    this._certificateAuthorityArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityArnInput() {
    return this._certificateAuthorityArn;
  }

  // certificate_body - computed: false, optional: true, required: false
  private _certificateBody?: string; 
  public get certificateBody() {
    return this.getStringAttribute('certificate_body');
  }
  public set certificateBody(value: string) {
    this._certificateBody = value;
  }
  public resetCertificateBody() {
    this._certificateBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateBodyInput() {
    return this._certificateBody;
  }

  // certificate_chain - computed: false, optional: true, required: false
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  public resetCertificateChain() {
    this._certificateChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain;
  }

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // domain_validation_options - computed: true, optional: false, required: false
  public domainValidationOptions(index: string) {
    return new AcmCertificateDomainValidationOptions(this, 'domain_validation_options', index, true);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subject_alternative_names - computed: true, optional: true, required: false
  private _subjectAlternativeNames?: string[]; 
  public get subjectAlternativeNames() {
    return cdktf.Fn.tolist(this.getListAttribute('subject_alternative_names'));
  }
  public set subjectAlternativeNames(value: string[]) {
    this._subjectAlternativeNames = value;
  }
  public resetSubjectAlternativeNames() {
    this._subjectAlternativeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternativeNamesInput() {
    return this._subjectAlternativeNames;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // validation_emails - computed: true, optional: false, required: false
  public get validationEmails() {
    return this.getListAttribute('validation_emails');
  }

  // validation_method - computed: true, optional: true, required: false
  private _validationMethod?: string; 
  public get validationMethod() {
    return this.getStringAttribute('validation_method');
  }
  public set validationMethod(value: string) {
    this._validationMethod = value;
  }
  public resetValidationMethod() {
    this._validationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationMethodInput() {
    return this._validationMethod;
  }

  // options - computed: false, optional: true, required: false
  private _options = new AcmCertificateOptionsOutputReference(this, "options", true);
  public get options() {
    return this._options;
  }
  public putOptions(value: AcmCertificateOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_authority_arn: cdktf.stringToTerraform(this._certificateAuthorityArn),
      certificate_body: cdktf.stringToTerraform(this._certificateBody),
      certificate_chain: cdktf.stringToTerraform(this._certificateChain),
      domain_name: cdktf.stringToTerraform(this._domainName),
      private_key: cdktf.stringToTerraform(this._privateKey),
      subject_alternative_names: cdktf.listMapper(cdktf.stringToTerraform)(this._subjectAlternativeNames),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      validation_method: cdktf.stringToTerraform(this._validationMethod),
      options: acmCertificateOptionsToTerraform(this._options.internalValue),
    };
  }
}
