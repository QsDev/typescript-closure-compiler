﻿namespace ts {
    export interface SynthesizedNode extends Node {
        leadingCommentRanges?: CommentRange[];
        trailingCommentRanges?: CommentRange[];
        startsOnNewLine: boolean;
    }

    export declare function nodeIsMissing(node: Node);
    export declare function nodeIsPresent(node: Node);
    export declare function isLet(node: Node): boolean;
    export declare function isConst(node: Node): boolean;
    export declare function escapeString(s: string): string;
    export declare function isTypeNode(node: Node): boolean;
    export declare function isIntrinsicJsxName(name: string);
    export declare function isExpression(node: Node): boolean;
    export declare function isDeclaration(node: Node): boolean;
    export declare let fullTripleSlashReferencePathRegEx: RegExp;
    export declare function nodeIsDecorated(node: Node): boolean;
    export declare function getIndentString(level: number): string;
    export declare function convertToBase64(input: string): string;
    export declare function nodeIsSynthesized(node: Node): boolean;
    export declare let fullTripleSlashAMDReferencePathRegEx: RegExp;
    export declare function nodeCanBeDecorated(node: Node): boolean;
    export declare function isAsyncFunctionLike(node: Node): boolean;
    export declare function isPrologueDirective(node: Node): boolean;
    export declare function nodeOrChildIsDecorated(node: Node): boolean;
    export declare function escapeNonAsciiCharacters(s: string): string;
    export declare function getCombinedNodeFlags(node: Node): NodeFlags;
    export declare function isConstEnumDeclaration(node: Node): boolean;
    export declare function escapeIdentifier(identifier: string): string;
    export declare function createSynthesizedNodeArray(): NodeArray<any>;
    export declare function cloneEntityName(node: EntityName): EntityName;
    export declare function getExternalModuleName(node: Node): Expression;
    export declare function isAliasSymbolDeclaration(node: Node): boolean;
    export declare function unescapeIdentifier(identifier: string): string;
    export declare function declarationNameToString(name: DeclarationName);
    export declare function isAssignmentOperator(token: SyntaxKind): boolean;
    export declare function isTemplateLiteralKind(kind: SyntaxKind): boolean;
    export declare function getEnclosingBlockScopeContainer(node: Node): Node;
    export declare function createTextWriter(newLine: String): EmitTextWriter;
    export declare function isAccessibilityModifier(kind: SyntaxKind): boolean;
    export declare function hasRestParameter(s: SignatureDeclaration): boolean;
    export declare function isLeftHandSideExpression(expr: Expression): boolean;
    export declare function isExternalModuleImportEqualsDeclaration(node: Node);
    export declare function isAccessor(node: Node): node is AccessorDeclaration;
    export declare function isRestParameter(node: ParameterDeclaration): boolean;
    export declare function isBindingPattern(node: Node): node is BindingPattern;
    export declare function isNodeDescendentOf(node: Node, ancestor: Node): boolean;
    export declare function makeIdentifierFromModuleName(moduleName: string): string;
    export declare function getTextOfNode(node: Node, includeTrivia?: boolean): string;
    export declare function isFunctionLike(node: Node): node is FunctionLikeDeclaration;
    export declare function isEmptyObjectLiteralOrArrayLiteral(expression: Node): boolean;
    export declare function getEntityNameFromTypeNode(node: TypeNode): EntityName | Expression;
    export declare function getLineOfLocalPosition(currentSourceFile: SourceFile, pos: number);
    export declare function isElementAccessExpression(node: Node): node is ElementAccessExpression;
    export declare function getLeadingCommentRangesOfNode(node: Node, sourceFileOfNode: SourceFile);
    export declare function isPropertyAccessExpression(node: Node): node is PropertyAccessExpression;
    export declare function createSynthesizedNode(kind: SyntaxKind, startsOnNewLine?: boolean): Node;
    export declare function getSetAccessorTypeAnnotationNode(accessor: AccessorDeclaration): TypeNode;
    export declare function isInstantiatedModule(node: ModuleDeclaration, preserveConstEnums: boolean);
    export declare function getFirstConstructorWithBody(node: ClassLikeDeclaration): ConstructorDeclaration;
    export declare function getOwnEmitOutputFilePath(sourceFile: SourceFile, host: EmitHost, extension: string);
    export declare function isInternalModuleImportEqualsDeclaration(node: Node): node is ImportEqualsDeclaration;
    export declare function getSourceFilePathInNewDir(sourceFile: SourceFile, host: EmitHost, newDirPath: string);
    export declare function shouldEmitToOwnFile(sourceFile: SourceFile, compilerOptions: CompilerOptions): boolean;
    export declare function getInterfaceBaseTypeNodes(node: InterfaceDeclaration): NodeArray<ExpressionWithTypeArguments>;
    export declare function getClassExtendsHeritageClauseElement(node: ClassLikeDeclaration): ExpressionWithTypeArguments;
    export declare function getAllAccessorDeclarations(declarations: NodeArray<Declaration>, accessor: AccessorDeclaration);
    export declare function getSourceTextOfNodeFromSourceFile(sourceFile: SourceFile, node: Node, includeTrivia?: boolean): string;
    export declare function getClassImplementsHeritageClauseElements(node: ClassLikeDeclaration): NodeArray<ExpressionWithTypeArguments>;
    export declare function writeCommentRange(currentSourceFile: SourceFile, writer: EmitTextWriter, comment: CommentRange, newLine: string);
    export declare function writeFile(host: EmitHost, diagnostics: Diagnostic[], fileName: string, data: string, writeByteOrderMark: boolean);
    export declare function emitNewLineBeforeLeadingComments(currentSourceFile: SourceFile, writer: EmitTextWriter, node: TextRange, leadingComments: CommentRange[]);
    export declare function emitComments(currentSourceFile: SourceFile, writer: EmitTextWriter, comments: CommentRange[], trailingSeparator: boolean, newLine: string, writeComment: (currentSourceFile: SourceFile, writer: EmitTextWriter, comment: CommentRange, newLine: string) => void);
}